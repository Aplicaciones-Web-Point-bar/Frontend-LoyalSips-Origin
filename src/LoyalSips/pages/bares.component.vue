<template>
    <div>
      <div>
        <h1 class="titulo-contact">Drink Catalogue</h1>
      </div>
      <div class="card">
        <pv-data-table
            ref="dt"
            :value="tutorials"
            v-model:selection="selectedTutorials"
            dataKey="id"
            :paginator="true"
            :rows="10"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tutorials"
            responsiveLayout="scroll"
        >

          <pv-column
              selectionMode="multiple"
              style="width: 3rem"
              :exportable="false"
          ></pv-column>
          <pv-column
              field="id"
              header="Id"
              :sortable="true"
              style="min-width: 12rem"
          ></pv-column>
          <pv-column
              field="name"
              header="Name"
              :sortable="true"
              style="min-width: 16rem"
          ></pv-column>
          <pv-column
              field="description"
              header="Description"
              :sortable="true"
              style="min-width: 16rem"
          ></pv-column>
          <pv-column :exportable="false" style="min-width: 8rem">
              <template #body="slotProps">
                  <pv-button
                      icon="pi pi-pencil"
                      class="p-button-text p-button-rounded"
                      @click="editTutorial(slotProps.data)"
                  />
                  <pv-button
                      icon="pi pi-trash"
                      class="p-button-text p-button-rounded"
                      @click="confirmDeleteTutorial(slotProps.data)"
                  />
              </template>
          </pv-column>
        </pv-data-table>
      </div>
      <pv-dialog
        v-model:visible="tutorialDialog"
        :style="{ width: '450px' }"
        header="Tutorial Information"
        :modal="true"
        class="p-fluid"
    >
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text
              type="text"
              id="name"
              v-model.trim="tutorial.name"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !tutorial.name }"
          />
          <label for="name">name</label>
          <small class="p-error" v-if="submitted && !tutorial.name">
            name is required.
          </small>
        </span>
      </div>

      <div class="field">
        <span class="p-float-label">
          <pv-textarea
              id="description"
              v-model="tutorial.description"
              required="false"
              rows="2"
              cols="20"
          />
          <label for="description">Description</label>
        </span>
      </div>
      <div class="field">
        <pv-dropdown
            id="published"
            v-model="tutorial.status"
            :options="statuses"
            optionLabel="label"
            placeholder="Select a Status"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value && slotProps.value.value">
              <span :class="'tutorial-badge status-' + slotProps.value.value">
                {{ slotProps.value.label}}
              </span>
            </div>
            <div v-else-if="slotProps.value && !slotProps.value.value">
              <span :class=" 'tutorial-badge status-' + slotProps.value.toLowerCase() ">
                {{ slotProps.value }}
              </span>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
        </pv-dropdown>
      </div>
      <template #footer>
        <pv-button
            :label="'Cancel'.toUpperCase()"
            icon="pi pi-times"
            class="p-button-text"
            @click="hideDialog"
        />
        <pv-button
            :label="'Save'.toUpperCase()"
            icon="pi pi-check"
            class="p-button-text"
            @click="saveTutorial"
        />
      </template>
    </pv-dialog>
    <pv-dialog
        v-model:visible="deleteTutorialDialog"
        :style="{ width: '450px' }"
        header="Confirm"
        :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="tutorial">
            Are you sure you want to delete <b>{{ tutorial.name }}</b>?
        </span>
      </div>
      <template #footer>
        <pv-button
            :label="'No'.toUpperCase()"
            icon="pi pi-times"
            class="p-button-text"
            @click="deleteTutorialDialog = false"
        />
        <pv-button
            :label="'Yes'.toUpperCase()"
            icon="pi pi-check"
            class="p-button-text"
            @click="deleteTutorial"
        />
      </template>
    </pv-dialog>
    <pv-dialog
        v-model:visible="deleteTutorialsDialog"
        :style="{ width: '450px' }"
        header="Confirm"
        :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="tutorial">
          Are you sure you want to delete the selected tutorials?
        </span>
      </div>
      <template #footer>
        <pv-button
            :label="'No'.toUpperCase()"
            icon="pi pi-times"
            class="p-button-text"
            @click="deleteTutorialsDialog = false"
        />
        <pv-button
            :label="'Yes'.toUpperCase()"
            icon="pi pi-check"
            class="p-button-text"
            @click="deleteSelectedTutorials"
        />
      </template>
    </pv-dialog>

    </div>
  </template>

  <script>
  import { TutorialsApiService } from "../services/tutorials-api.service";
  import { FilterMatchMode } from "primevue/api";

  export default {
    name: "tutorial-list",
    data() {
      return {
        tutorials: [],
        tutorialDialog: false,
        deleteTutorialDialog: false,
        deleteTutorialsDialog: false,
        tutorial: {},
        selectedTutorials: null,
        tutorialsService: null,
        filters: {},
        submitted: false,
      };
    },
    created() {
      this.tutorialsService = new TutorialsApiService();
      this.tutorialsService.getAll()
          .then((response) => {
              this.tutorials = response.data;
              console.log(this.tutorials);
              this.tutorials.forEach(
                  (tutorial) => this.getDisplayableTutorial(tutorial)
              );
          console.log(this.tutorials);
      });
      this.initFilters();
    },

    methods: {
      getDisplayableTutorial(tutorial) {
        tutorial.status = tutorial.published ? this.statuses[0].label : this.statuses[1].label;
        return tutorial;
      },
      initFilters() {
        this.filters = {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        };
      },
      exportToCSV() {
        this.$refs.dt.exportCSV();
      },
      getStorableTutorial(displayableTutorial) {
        return {
          id: displayableTutorial.id,
          name: displayableTutorial.name,
          description: displayableTutorial.description,
          published: displayableTutorial.status.label === "Published",
        };
      },
      openNew() {
        this.tutorial = {};
        this.submitted = false;
        this.tutorialDialog = true;
      },
      hideDialog() {
        this.tutorialDialog = false;
        this.submitted = false;
      },
      findIndexById(id) {
        console.log(`current id: ${id}`);
        return this.tutorials.findIndex((tutorial) => tutorial.id === id);
      },
      saveTutorial() {
        this.submitted = true;
        if (this.tutorial.name.trim()) {
          if (this.tutorial.id) {
            console.log(this.tutorial);
            this.tutorial = this.getStorableTutorial(this.tutorial);
            this.tutorialsService
                .update(this.tutorial.id, this.tutorial)
                .then((response) => {
                  console.log(response.data.id);
                  this.tutorials[this.findIndexById(response.data.id)] =
                      this.getDisplayableTutorial(response.data);
                  this.$toast.add({
                    severity: "success",
                    summary: "Successful",
                    detail: "Tutorial Updated",
                    life: 3000,
                  });
                  console.log(response);
                });
          } else {
            this.tutorial.id = 0;
            console.log(this.tutorial);
            this.tutorial = this.getStorableTutorial(this.tutorial);
            this.tutorialsService.create(this.tutorial)
                .then((response) => {
                  this.tutorial = this.getDisplayableTutorial(response.data);
                  this.tutorials.push(this.tutorial);
                  this.$toast.add({
                    severity: "success",
                    summary: "Successful",
                    detail: "Tutorial Created",
                    life: 3000,
                  });
                  console.log(response);
                });
          }
          this.tutorialDialog = false;
          this.tutorial = {};
        }
      },
      editTutorial(tutorial) {
        console.log(tutorial);
        this.tutorial = { ...tutorial };
        console.log(this.tutorial);
        this.tutorialDialog = true;
      },
      confirmDeleteTutorial(tutorial) {
        this.tutorial = tutorial;
        this.deleteTutorialDialog = true;
      },
      deleteTutorial() {
        this.tutorialsService.delete(this.tutorial.id).then((response) => {
          this.tutorials = this.tutorials.filter(
              (t) => t.id !== this.tutorial.id
          );
          this.deleteTutorialDialog = false;
          this.tutorial = {};
          this.$toast.add({
            severity: "success",
            summary: "Successful",
            detail: "Tutorial Deleted",
            life: 3000,
          });
          console.log(response);
        });
      },
      confirmDeleteSelected() {
        this.deleteTutorialsDialog = true;
      },
      deleteSelectedTutorials() {
        this.selectedTutorials.forEach((tutorial) => {
          this.tutorialsService.delete(tutorial.id)
            .then((response) => {
              this.tutorials = this.tutorials.filter(
                (t) => t.id !== tutorial.id
              );
              console.log(response);
            });
        });
        this.deleteTutorialsDialog = false;
      },
    },
  };
  </script>

  <style scoped>
  .titulo-contact {
    font-size:4em;
    text-align: center;
    //margin-top: 1.4em;
    margin-bottom: 1em;
    color: #c5bfbc;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }
  .confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
.card {
  background-color: #FBF7F7C6;
}
  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 960px) {
      align-items: start;
    }
  }

  @media screen and (max-width: 960px) {
    ::v-deep(.p-toolbar) {
      flex-wrap: wrap;
      .p-button {
        margin-bottom: 0.25rem;
      }
    }
  }
  </style>

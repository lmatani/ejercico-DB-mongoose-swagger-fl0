module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          Task: "Create a task",
        },
        description: "Create Task",
        operationId: "create",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/": {
      get: {
        tags: {
          Task: "Get tasks",
        },
        description: "Get all Tasks",
        operationId: "",
        parameters: [],
        responses: {
          200: {
            description: "List of tasks",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/id/{_id}": {
      get: {
        tags: {
          Tasks: "Get a task",
        },
        description: "Get task",
        operationId: "/id/_id",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of Task to be selected",
          },
        ],
        responses: {
          200: { description: "Info Task" },
          500: { description: "Server error" },
        },
      },
      delete: {
        tags: {
          Tasks: "Delete a task",
        },
        description: "Delete task",
        operationId: "/id/_id",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of Task to be deleted",
          },
        ],
        responses: {
          200: { description: "Task deleted successfully" },
          500: { description: "Server error" },
        },
      },
      put: {
        tags: {
          Tasks: "Update a task",
        },
        description: "Update task",
        operationId: "/id/_id",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of Task to be updated",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { 
                properties: {
                  title: {
                  type: "string"}
                },
              }
            },
          },
        },
        responses: {
          200: { description: "Task updated successfully" },
          500: { description: "Server error" },
        },
      },
    }, 
    "/markAsCompleted/{_id}": {
      put: {
        tags: {
          Tasks: "Update a task",
        },
        description: "Update task",
        operationId: "/id/_id",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of Task to be updated",
          },
        ],
        responses: {
          200: { description: "Task updated successfully" },
          500: { description: "Server error" },
        },
      },
    },
  },
};

module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    title:{
                        type:'String',
                        description:"task name to register",
                        example:"Tarea 1"
                    },
                    completed:{
                        type:'Boolean',
                        description:"to mark is task completed (1 is true)",
                        example:"0"
                    },
                }
            }
        }
    }
}

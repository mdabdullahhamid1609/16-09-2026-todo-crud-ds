import todoSchema from "../model/todoSchema.js"

export const createTodo = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const data = await todoSchema.create({ title });//This inserts document into MongoDB.
    // equivalent to mongodb querry insertOne({ title: "Learn Mongo" })
        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data
        });

    } catch (error) {
        console.log(error);  // VERY IMPORTANT
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
//get
export const getAllTodo = async (req, res) => {
    try {
        const todos = await todoSchema.find();

        return res.status(200).json({
            success: true,
            data: todos
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export const deleteTodo = async (req, res) => {
    try {
        const todosId = req.params.id;
        // const data = await todoSchema.findByIdAndDelete({_id: todosId})
        await todoSchema.findByIdAndDelete(todosId)

    if (data) {
            return res.status(200).json({
                success: true,
                message: "Todo deleted successfully",
                data: data
            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Todo not deleted "
        })
    }
}
export const updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const {title} = req.body
        //const data = await todoSchema.findByIdAndUpdate({_id: todoId})
        const data = await todoSchema.findByIdAndUpdate(
        todoId,           // which document
        { title },        // what to update
        { new: true }     // return updated document
        );

        if (data) {
            data.title = title;
            await data.save();
            return res.status(200).json({
                sucess: true,
                message: "todo updated",
                data: data
            })
        } else{

        return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }
    //findByIdAndUpdate(todoId, { title }, { new: true })
    //Becomes this MongoDB query:
    // db.todos.updateOne(
    //{ _id: todoId },
    //{ $set: { title: "New Title" } }
    //)


        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "todo not updated"
        })
    }
}
// status code 201 created 200 sucessful request 400 Bad Request
//401 Unauthorized 403 Forbidden 404 Not Found 500 Internal Server Error
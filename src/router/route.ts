
import express ,{Request,Response}from 'express';
import { TaskManager,BaseTask} from '../model/todo';
import { stat } from 'fs';
const router =express.Router();
const taskManager = new TaskManager();

router.get('/',(req:Request,res:Response)=>{
  const task = taskManager.getAllTasks()
  res.render('home',{task})

})
router.post("/add",(req:Request,res:Response)=>{
const {title,isUrgent} =req.body;
console.log("is urgent")
taskManager.addTask(title,isUrgent)
res.redirect('/')
})
router.get("/edit/:id",(req:Request,res:Response)=>{
  console.log(req.params.id,'osidhf')
  const task =taskManager.getTaskById(parseInt(req.params.id))
  if(task){
    res.render('edit',{task})

  }else{
    res.redirect('/')
  }
})
router.post('/update/:id',(req:Request,res:Response)=>{
const {title,status} = req.body;
taskManager.updateTask(parseInt(req.params.id),title,status)
res.redirect('/')
})
router.post("/delete/:id",(req:Request,res:Response)=>{
  console.log(req.params.id,'parmsid')
  taskManager.deletetask(parseInt(req.params.id))
  res.redirect('/')
})
export default router

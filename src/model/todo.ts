abstract class BaseTask{
    constructor(
        public id:number,
        public title:string,
        public status:'to-do'|'in-progress'|'done'
    ){}
    abstract getPriority():string
}
class RegularTask extends BaseTask{
    getPriority(): string {
        return "Normal"
    }
}

class UrgentTask extends BaseTask{
    getPriority(): string {
        return"High"
    }
}
export {BaseTask,RegularTask,UrgentTask}

export class TaskManager{
    private task :BaseTask[] = []
    private nextId = 1

    addTask(title:string,isUrgent:boolean):BaseTask{
        const task =isUrgent
        ? new UrgentTask(this.nextId++,title,'to-do')
        : new RegularTask(this.nextId++,title,'to-do')
        this.task.push(task)
        return task
    }
    getAllTasks():BaseTask[]{
        return this.task
    }
    getTaskById(id:number):BaseTask |undefined{
        return this.task.find(task=>task.id===id)
    }
    updateTask(id:number,title:string,status:"to-do" | 'in-progress'|'done'):BaseTask | undefined{
        const task = this.getTaskById(id)
        if(task){
            task.title=title
            task.status = status
        }
        return task
    }
    deletetask(id:number):boolean{
        const index = this.task.findIndex(task=>task.id==id)
        if(index!==-1){
            this.task.splice(index,1)
            return true
        }
        return false
    }
}



import style from "../TasksAndMembers/TasksAndMembers.module.scss"

const TasksAndMembers = (props) => {
    return(
        <div className={style.task_and_members_wrapper}>
            <div className={style.tasks}>
                <p>{props.tasks}</p>
                <p>Tasks</p>
            </div>
            <div className={style.members}>
                <p>{props.members}</p>
                <p>Memberss</p>
            </div>
        </div>
    )
}

export default TasksAndMembers;
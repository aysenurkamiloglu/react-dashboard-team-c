import style from "../Status/Status.module.scss";

const Status = () => {
    return (
        <div className={style.status}>
            <div className={style.status__header}>
                <p>Status</p>
            </div>
            <div className={style.status__situation}>
                <p>On Hold</p>
            </div>
        </div>
    )
}

export default Status;
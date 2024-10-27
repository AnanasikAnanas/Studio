const InfoProject = (props) => {
    return(
        <div className="z-10 backdrop-blur-2xl bg-[#262626]/75 text-5xl p-6 rounded-[48px] border">
            <p className="">{props.number} <span className="text-[#878787]">{props.text}</span></p>
        </div>
    )
}
export default InfoProject;
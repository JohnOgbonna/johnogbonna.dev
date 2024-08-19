import { skill } from "../tools/typesAndInterfaces";

interface Props {
    skillSection: skill
}

export default function Skills(props: Props) {
    return (
        <div>
            <div className={`flex flex-col px-4 sm:mb-8`}>
                <div className={`mb-[1.5rem] md:mb-8`}>
                    <h2 className={`text-[1.3rem] underline`}>{props.skillSection.name}</h2>
                    <p>{props.skillSection.description}</p>
                </div>
                <p className={`mb-4 text-center italic`}>{`${props.skillSection.name} technologies I use:`}</p>
                <ul className={`flex flex-wrap justify-center`}>
                    {
                        props.skillSection.programs.map(program => (
                            <li className={`rounded-[8px] p-1 sm:text-[13px] border border-slate-600 mr-2 last:mr-0 mb-2 text-center w-fit`}
                            key = {`${program}key`}
                            >{program}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

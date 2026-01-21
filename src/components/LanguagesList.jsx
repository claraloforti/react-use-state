import languages from "../assets/languages";
import LanguageBtn from "./LanguageButton";

const LanguagesList = () => {

    return (
        <>
            <h1>Learn Web Development</h1>

            <ul className="languages-list">
                {languages.map((language) => (
                    <li key={language.id}>
                        <LanguageBtn title={language.title} />
                    </li>
                ))}
            </ul>
        </>
    )
};




export default LanguagesList;


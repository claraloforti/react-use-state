import languages from "../assets/languages";
import LanguageBtn from "./LanguageButton";

const LanguagesList = () => {

    return (
        <>
            <h1>Learn Web Development</h1>

            <div className="languages-list">
                {languages.map((language) => (
                    <LanguageBtn
                        key={language.id}
                        title={language.title}
                    />
                ))}
            </div>
        </>
    )
};




export default LanguagesList;


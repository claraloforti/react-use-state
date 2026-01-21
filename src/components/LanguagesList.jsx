import languages from "../assets/languages";
import LanguageBtn from "./LanguageButton";
import { useState } from "react";

const LanguagesList = () => {

    // variabile di stato del componente
    const [activeLanguage, setActiveLanguage] = useState(null);

    const selectedLanguage = languages.find((language) =>
        language.id === activeLanguage
    );

    return (
        <>
            <h1>Learn Web Development</h1>

            <ul className="languages-list">
                {languages.map((language) => (
                    <li key={language.id}>
                        <LanguageBtn
                            title={language.title}
                            isOpen={activeLanguage === language.id}
                            onLanguageToggle={() =>
                                setActiveLanguage(activeLanguage === language.id ? null : language.id
                                )}
                        />
                    </li>
                ))}
            </ul>

            {activeLanguage && (
                <div className="language-card">
                    <h2>{selectedLanguage.title}</h2>
                    <p>{selectedLanguage.description}</p>
                </div>
            )}
        </>
    )
};

export default LanguagesList;


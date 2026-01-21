const LanguageBtn = ({ title, isOpen, onLanguageToggle, description }) => {
    return (
        <>
            <button onClick={onLanguageToggle}>
                {title}
            </button>
            {isOpen && <div>{description}</div>}
        </>
    );
};

export default LanguageBtn
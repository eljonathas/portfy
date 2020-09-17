

const StackButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
    <>
        <button { ...rest }>
            { children }
        </button>
        <style jsx>{`
            button {
                background: var(--elements-bg-color);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1.4em 0;
                outline: none;
                border: transparent;
            }            
        `}</style>
    </>
)

export default StackButton
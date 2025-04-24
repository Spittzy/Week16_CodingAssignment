type button = {
    text: string,
    onClick: () => void
}

export default function NavBtn({ text, onClick }: button) {
    return (
        <div>
            <button className="btn" onClick={onClick}>
                {text}
            </button>
        </div>
    )

}
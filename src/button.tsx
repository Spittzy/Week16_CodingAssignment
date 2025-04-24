type button = {
    text: string,
    onClick: () => void
}

export default function Button({ text, onClick }: button) {
    return (
        <div>
            <button className="btn btn-danger rounded-pill mb-2 ms-2 " onClick={onClick}>
                {text}
            </button>
        </div>
    )

}
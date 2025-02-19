interface Props {
    text: string
}

export const Button = (props: Props) => {
    return (
        <button className="bg-violet-500 text-white px-5 py-2 rounded-2xl">
            {props.text || 'Enviar'}
        </button>
    )
}
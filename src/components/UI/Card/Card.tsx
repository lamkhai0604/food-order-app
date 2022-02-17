import { ReactNode } from "react";
import "./Card.css"

interface ICardProps {
    children: ReactNode
}

const Card = (props: ICardProps) => {
    return <div className="card">{props.children}</div>
}

export default Card;
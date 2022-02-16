import { FC } from 'react'
import { Card } from 'react-bootstrap'
import './CustomCard.css'

export interface CustomCardProps {
  title: string
  subtitle: string
  body: string
  onClick?: () => void
}

const CustomCard: FC<CustomCardProps> = (props) => {
  const { title, subtitle, body, onClick } = props
  return (
    <Card
      className={onClick && 'Custom-card'}
      onClick={onClick}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CustomCard

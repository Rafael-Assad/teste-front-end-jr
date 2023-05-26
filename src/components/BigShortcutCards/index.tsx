import Button from "../Button"

import "./style.scss"

interface BigShortcutCardsProps {
  title: string;
}

const BigShortcutCards = ({title}: BigShortcutCardsProps) => {
  return (
    <div className="big-card">
      <h3>{title}</h3>

      <p>Lorem ipsum dolor sit amet, consectetur</p>

      <Button buttonName="CONFIRA" />
    </div>
  )
}

export default BigShortcutCards
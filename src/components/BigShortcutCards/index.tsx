import Button from "../Button"

interface BigShortcutCardsProps {
  title: string;
}

const BigShortcutCards = ({title}: BigShortcutCardsProps) => {
  return (
    <div>
      <h3>{title}</h3>

      <p></p>

      <Button buttonName="CONFIRA" />
    </div>
  )
}

export default BigShortcutCards
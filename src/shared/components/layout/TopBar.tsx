import { FC, HTMLAttributes, PropsWithChildren } from 'react'

type TopBarProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const TopBar: FC<TopBarProps> = (props) => {
  return (
    <div {...props}></div>
  )
}

export default TopBar

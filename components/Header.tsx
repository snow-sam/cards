type HeaderProps = {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <div className="text-center mb-5">
            <h1 className="font-medium text-xl text-color4">{title}</h1>
            {subtitle && <span className="font-medium text-sm text-color2">{subtitle}</span>}
        </div>
    )
}
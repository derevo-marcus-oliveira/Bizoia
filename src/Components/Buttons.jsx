

function Buttons() {
    
    const Primary = () => {
        return (
            <button type="button" className="btn btn-primary"></button>
        )
    }; 
    const Secondary = ({children}) => {
        return (
            <button type="button" className="btn btn-secondary">
                {children}
            </button>
        )
    }; 
    const Success = () => {
        return (
            <button type="button" className="btn btn-success"></button>
        )
    }; 
    const Danger = () => {
        return (
            <button type="button" className="btn btn-danger"></button>
        )
    }; 
    const Warning = () => {
        return (
            <button type="button" className="btn btn-warning"></button>
        )
    }; 
    const Info = () => {
        return (
            <button type="button" className="btn btn-info"></button>
        )
    }; 
    const Light = () => {
        return (
            <button type="button" className="btn btn-light"></button>
        )
    }; 
    const Dark = () => {
        return (
            <button type="button" className="btn btn-dark"></button>
        )
    }; 
    const Link = () => {
        return (
            <button type="button" className="btn btn-link"></button>
        )
    }; 

    return { Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, Link }
}

export default {
    Primary : Buttons().Primary,
    Secondary : Buttons().Secondary,
    Success : Buttons().Success,
    Danger : Buttons().Danger,
    Warning : Buttons().Warning,
    Info : Buttons().Info,
    Light : Buttons().Light,
    Dark : Buttons().Dark,
    Link : Buttons().Link,
};
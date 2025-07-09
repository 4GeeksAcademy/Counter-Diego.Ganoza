export const Digito = ({ number }) => {
    return (
        <div className="col-2">
            <div className="p-3 mb-2 bg-black text-white border border-danger rounded-4" style={{ width: "50%" }}>
                <div className="p-3 mb-2 bg-dark text-white rounded-5">
                    <h3 className="text-center">{number}</h3>
                </div>
            </div>
        </div>
    )
}
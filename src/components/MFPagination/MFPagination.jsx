import "./MFPagination.css"
import leftArrow from '../../assets/paginationpreviousarrow.svg'
import rigthArrow from '../../assets/paginationnextarrow.svg'

const MFPagination = ({ amountPage, pageSelected, handleSetPageSelected }) => {
    return (
        <div className="mf-pagination-container">
            {pageSelected !== 1 &&
                <button type="button" className="mf-pagination-item" onClick={(e)=>handleSetPageSelected(pageSelected - 1)}>
                    <img src={leftArrow} alt="previous page" />
                </button>
            }
            {[...Array(10)].map((pageNumber, key) => {
                return (
                    <button type="button" className="mf-pagination-item" key={key} onClick={(e)=>handleSetPageSelected(key + 1)}>
                        {key + 1}
                    </button>
                )
            })}
            <button type="button" className="mf-pagination-item" onClick={(e)=>handleSetPageSelected(pageSelected + 1)}>
                <img src={rigthArrow} alt="next page" />
            </button>
        </div>
    )
}

export default MFPagination;
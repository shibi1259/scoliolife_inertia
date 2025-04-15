import { useState } from "react";
import { HiMiniMinus } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";
const Faqs = () => {
    const [openItemLeft, setOpenItemLeft] = useState(null);
    const [openItemRight, setOpenItemRight] = useState(null);

    const toggleAccordion = (index, colIndex) => {
        if (colIndex === 0) {
            setOpenItemLeft((prevOpenItem) => (prevOpenItem === index ? null : index));
            setOpenItemRight(null);
        } else {
            setOpenItemRight((prevOpenItem) => (prevOpenItem === index ? null : index));
            setOpenItemLeft(null);
        }
    };

    return (
        <div className="faq-section" data-aos="flip-right">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="row">
                    {[0, 1].map((colIndex) => (
                        <div key={colIndex} className="col-md-6">
                            <div className="accordion-single js-acc-single">
                                {[1,2,3].map((acc, index) => (
                                    <div
                                        key={index}
                                        className={`accordion-single-item js-acc-item ${
                                            (colIndex === 0 && openItemLeft === index) ||
                                            (colIndex === 1 && openItemRight === index)
                                                ? 'is-open'
                                                : ''
                                        }`}
                                    >
                                        <h4
                                            className="accordion-single-title js-acc-single-trigger"
                                            onClick={() => toggleAccordion(index, colIndex)}
                                        >
                                            {colIndex === 0 ? (
                                                openItemLeft === index ? (
                                                    <HiMiniMinus />
                                                ) : (
                                                    <HiPlus />
                                                )
                                            ) : openItemRight === index ? (
                                                <HiMiniMinus />
                                            ) : (
                                                <HiPlus />
                                            )}
                                            Accordion Title
                                        </h4>
                                        <div className="accordion-single-content">
                                            <div>Accordion Content</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faqs;

import React, { useState } from "react";
import "./Accordion.css"; 
function Accordion() {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleAnswer = (index) => {
    setIsOpen((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="accordion">
      <h2>ხშირად დასმული კითხვები</h2>
      <div className="question">
        <div
          className={`question-header ${isOpen[0] ? "active" : ""}`}
          onClick={() => toggleAnswer(0)}
        >
          <p>როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?</p>
          <span>{isOpen[0] ? "▲" : "▼"}</span>
        </div>
        <div className={`answer ${isOpen[0] ? "active" : ""}`}>
          <p>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი: <br/>
          I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. 

<br/>II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.

<br/>III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.

<br/>IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.
          </p>
        </div>
      </div>

      <div className="question">
        <div
          className={`question-header ${isOpen[1] ? "active" : ""}`}
          onClick={() => toggleAnswer(1)}
        >
          <p>შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?</p>
          <span>{isOpen[1] ? "▲" : "▼"}</span>
        </div>
        <div className={`answer ${isOpen[1] ? "active" : ""}`}>
          <p>
            TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
          </p>
        </div>
      </div>

      <div className="question">
        <div
          className={`question-header ${isOpen[2] ? "active" : ""}`}
          onClick={() => toggleAnswer(2)}
        >
          <p>რა ღირს სწავლა პროგრამის ფარგლებში?</p>
          <span>{isOpen[2] ? "▲" : "▼"}</span>
        </div>
        <div className={`answer ${isOpen[2] ? "active" : ""}`}>
          <p>პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;

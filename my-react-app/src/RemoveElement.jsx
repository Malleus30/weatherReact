export function RemoveElement(props) {
    const { value, onOpen, onClose } = props;

    function clickHandler(event) {
        const tag = event.target.tagName;
    
        if (tag === "DIV") {
          console.log(tag);
          onClose(value);
          return;
        }
    
        onOpen(value);
      }

      return (
    <li className="faforedPlace" onClick={clickHandler}>    
       <p className="text loadFavoriteOne">{value}</p>
       <div className="close">
        <span className="line_rotate45"></span>
        <span className="line_rotate45"></span>
       </div>
    </li>
      );
}
// Функциональный компонент User
function User(props) {
    // Хук, управляющий внутренним состоянием.
    const [rating, setRating] = React.useState(0);

    /*
     * Обработчики событий: изменяют внутреннее состояние
     */
    function handleLike() {
        setRating(1);
    }

    function handleDislike() {
        setRating(-1);
    }

    return (
        <div className="user">
            <img src={`https://code.s3.yandex.net/web-code/react/${props.id}.png`} width="75"/>
            <br/><b>{props.name}</b>
            <div className="rating">
                <button onClick={handleLike} disabled={rating > 0}>👍</button>
                {rating}
                <button onClick={handleDislike} disabled={rating < 0}>👎</button>
            </div>
        </div>
    );
}

// Классовый компонент class User - {/* Т.Е. БЫЛО БЕЗ ХУКОВ:*/}
// class User extends React.Component {
//     constructor(props) {
//         super(props);
//
//         // Начальные значения внутреннего состояния
//         this.state = {
//             rating: 0,
//         };
//     }
//
//     /*
//      * Обработчики событий: изменяют внутреннее состояние
//      */
//     handleLike = () => {
//         this.setState({ rating: 1 });
//     };
//
//     handleDislike = () => {
//         this.setState({ rating: -1 });
//     };
//
//     // JSX-структура компонента
//     render() {
//         return (
//             <p>
//                 <img src={`https://code.s3.yandex.net/web-code/react/${this.props.id}.png`} width="75" />
//                 <br /><b>{this.props.name}</b>
//                 <div className="rating">
//                     <button onClick={this.handleLike} disabled={this.state.rating > 0}>👍</button>
//                     {this.state.rating}
//                     <button onClick={this.handleDislike} disabled={this.state.rating < 0}>👎</button>
//                 </div>
//             </p>
//         );
//     }
// }

// Основной код приложения
ReactDOM.render((
    <>
        <h2>Мои воображаемые друзья:</h2>
        <User id="1" name="Gregory"/>
        <User id="2" name="James"/>
        <User id="3" name="Allison"/>
    </>
), document.querySelector('#root'));

import React from 'react' ; 
import './App.css';

    var articalsData = [];
        for (var i = 0; i < 3; i++) {
        articalsData[i] = {
            title: "New Blog Title" + (i + 1),
            body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        };
        }
        const ArticalTitle = ({title}) => (<h1>{title}</h1>);
        const Pargraph = ({text}) => (<p>{text}</p>);
        
        const ArticleB = ({title, body})=> (
        <article className="artical">
            <ArticalTitle title={title}/>
            { body? <p>{body}</p>: '' }
        </article>);

    class Atricle extends React.Component{
        constructor(){
        super(); 
        this.state = {
            title: localStorage.getItem('title') , 
            body: localStorage.getItem('body') 
        }
        } 
        onclick = () => {
            localStorage.setItem("title", document.getElementById("ArticalTitle").value);
            localStorage.setItem("body", document.getElementById("ArticalBody").value);
            this.setState(
            {
                title: localStorage.getItem('title'), 
                body: localStorage.getItem('body')
            }
            );
            articalsData.push(this.state.title);
            articalsData.push(this.state.body);
        }

        render(){
            return (
            <div >
                <div className="flex">
                {articalsData.map((e,index)=>{
                    return <ArticleB key={'art-'+index} 
                                title={e.title} body={e.body} />
                })}
            </div >
                <br/>
                <h4 > The title is {this.state.title}</h4>
                <h4 >The body is {this.state.body}</h4> <br />
                    <div > 
                        <label>Enter the title </label>            
                        <input id="ArticalTitle" type="text" /> <br/> <br/> 
                        <label>Enter the body </label> 
                        <input  id="ArticalBody" type="text"/> 
                        <br/> <br/>
                        <button onClick={this.onclick}>Submit the article</button>
                    </div>
            </div>
            )
        }
        
    }
    export default Atricle;

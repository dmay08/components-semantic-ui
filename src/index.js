import React from 'react';
import ReactDOM from 'react-dom';
// faker site
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Hey!
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    time="Today at 5pm"
                    text="This is awesome"
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Danny"
                    time="Today at 3pm"
                    text="This sucks"
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Liz"
                    time="Yesterday at 11am"
                    text="What's up?"
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))
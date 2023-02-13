import express from 'express';
// import { MongoClient } from 'mongodb';
import { db, connectToDb } from './db.js';
import fs from 'fs';
import admin from 'firebase-admin';
import { allowedNodeEnvironmentFlags } from 'process';
import exp from 'constants';
import { ConnectionCheckOutStartedEvent } from 'mongodb';

const credentials = JSON.parse(
    fs.readFileSync('./credentials.json')
);

admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

const app = express();
app.use(express.json());

// const articleInfo = [{
//     name: 'learn-react',
//     upvotes: 0,
//     comments: [],
// }, {
//     name: 'learn-node',
//     upvotes: 0,
//     comments: [],
// }, {
//     name: 'mongodb',
//     upvotes: 0,
//     comments: [],
// }]

// app.post('/hello', (req, res) => {
//     console.log(req.body);
//     res.send(`Hello! ${req.body.name}`);
// });

// app.get('/hello/:name', (req, res) => {
//     const { name } = req.params;
//     res.send(`Hello! ${name}`);
// })

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;

    const article = await db.collection('articles').findOne({ name });

    if(article) {
        res.json(article);
    }
    else {
        res.sendStatus(404);
    }

})

// app.get('/api/expense', async (req, res) => {
//     const { name } = req.params;
//     console.log('name----------->', name);
//     res.send('hello');
// })

app.post('/api/expense', async (req, res) => {
    const { name } = req.params;
    const { text, amount } = req.body;
    // res.send({text, amount})
    
    await db.collection('expense').updateOne({ name }, {
        $push: {expense: {text, amount} },
    })
    const expense = await db.collection('expense').findOne({ name });

    if(expense) {
        res.json(expense)
    }
    else {
        res.send(`Expense doesn\'t exist`)
    }
})

app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;

    await db.collection('articles').updateOne({ name }, {
        $inc: {upvotes: 1},
    })

    const article = await db.collection('articles').findOne({ name });

    if(article) {
        // article.upvotes += 1;
        console.log(article);
        res.json(article);
    }
    else {
        res.send(`The article doesn\'t exist`);
    }
})

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    
    await db.collection('articles').updateOne({ name }, {
        $push: {comments: {postedBy, text} },
    })
    const article = await db.collection('articles').findOne({ name });

    if(article) {
        // article.comments.push({postedBy, text});
        res.json(article)
    }
    else {
        res.send(`Article doesn\'t exist`)
    }
})

connectToDb(() => {
    app.listen(8000, () => {
        console.log('Server is Listening on port 8000')
    })
})

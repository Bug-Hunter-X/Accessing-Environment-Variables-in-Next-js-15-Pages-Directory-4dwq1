```javascript
// pages/about.js
import {unstable_getServerSession} from 'next-auth';
import {NextApiRequest,NextApiResponse} from 'next';

export default async function About(req:NextApiRequest,res:NextApiResponse) {
  // Access environment variables using process.env only in API routes or getServerSideProps.
  const session = await unstable_getServerSession(req,res,{});
  const myVariable = process.env.MY_VARIABLE;
  console.log(myVariable);
}
```
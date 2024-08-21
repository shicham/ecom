import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_JjEUC4tQ_NcvzpCEKiwzWLHcXo6zZbUJi');

export default async (req: NextApiRequest, res: NextApiResponse) => {
     const mails = "sassahicham4@gmail.com,philippe.ramsay@yahoo.com";
      
     mails.split(',').map(async (mail) => {
	
	console.log("--"+mail)
	   try {
			
			const { data, error } = await resend.emails.send({
			  from: 'Acme <onboarding@resend.dev>',
			  to: ["sassahicham4@gmail.com"],
			  subject: 'Cap sur la rentrée - Chaussures : -60% avec le code ABAC12',
			  react: EmailTemplate({ firstName: 'John' }),
			});
	
			if (error) {
			  res.status(400).json({ error });
			}

		res.status(200).json({ data });
	  } catch (error) {
		res.status(400).json({ error });
	  }
	
	
	})
    

    
}
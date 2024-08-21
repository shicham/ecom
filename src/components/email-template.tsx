import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
<div>
  <table >
		<tr>
			<td><a href="https://chaussureshomme.myshopify.com/"><img src="https://cdn.shopify.com/s/files/1/0841/3741/0888/files/intro_430x.png?v=1724183099" /></a></td>
		</tr>
  </table>
  </div>
);
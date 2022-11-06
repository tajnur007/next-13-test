/**
 *
 * CustomHead tag is used for using custom page title, keywords
 * and description. This tag will receive title, keywords and
 * description as its props. You can simply call it without
 * any props and it will generate its default values for the props.
 *
 **/

import Head from "next/head";

interface CustomHeadProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const CustomHead = ({ title, keywords, description }: CustomHeadProps) => {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>
        {title ? `${title} | Site Title` : 'Site Title'}
      </title>
    </>
  );
};

CustomHead.defaultProps = {
  keywords: 'keyword1, keyword2',
  description: 'This is an oridinary description',
};

export default CustomHead;
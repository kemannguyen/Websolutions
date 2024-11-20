import React from "react";

const PricingMonthPage = () => {
  return (
    <div className="flex-dir-ver">
      <text className="font-title bold-mid-x">Montly plan</text>
      <text className="font-subtitle font-gray bold-none paddingy-10">
        {" "}
        with our monthly plan we encourage growth
      </text>
      <p className="font-gray mt-60">
        {" "}
        Starting a new buisness isn't a small feat. Managing the available
        resources correctly in order to grow is hard. Where do you focus first?
        Is it in marketing to gain visibility and traffic or website to have an
        platform for your customers or maybe workforce so that you can handle
        all the requests.
      </p>

      <p className="font-gray">
        Creating a website can cost a lot of money. These are the cost to create
        an websiste according to{" "}
        <text className="bold-mid font-italic ">Forbes.</text>
      </p>

      <div className="font-gray flex-dir-ver w100p mt-60">
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">Domain Name</text>
          <text>0$ to $20 per year</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">Web Hosting</text>
          <text>$30 to $500 per year</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">Theme or Template</text>
          <text>0$ to $100 (one-time fee)</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">Professional Web Design </text>
          <text>100$ to $5,000 (one-time fee)</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">DIY Website Builder </text>
          <text>$100 to $400 per year</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">SSL Certificate</text>
          <text> $0 to $249 per year</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">Databases and API</text>
          <text> costs varies depending on usage</text>
        </div>
        <div className="flex-dir-hor space-between paddingy-10">
          <text className="bold-mid-x">Total cost:</text>
          <text> $130 to $1169+ /yr</text>
        </div>
        <text className="ml-auto">+ $100 to $5100 (one time fee) </text>
      </div>
      <p className="font-gray paddingy-10 mt-60">
        This is the reason to why we hade our monthly plan. With this you don't
        need to allocate a huge sum to create a website but you can focus your
        budget on growing your company.
      </p>
      <text className="font-subtitle bold-mid paddingy-10">
        {" "}
        What expenses do we cover?
      </text>
      <p className="font-gray paddingy-10">
        With our plan we'll take care of all expenses except the Database and
        API expenses since it can scale up depending on the usage.
        <br></br>
        If the site requires a database or API integration we'll together plan
        and discuss how it will work and how the cost can vary depending on
        traffic so that you'll get full transparency of what to expect before
        actually implementing it.
      </p>
      <text className="font-subtitle bold-mid paddingy-10 mt-60">
        {" "}
        What expenses do we cover?
      </text>
    </div>
  );
};

export default PricingMonthPage;

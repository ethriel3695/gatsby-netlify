import React from 'react';

export const NewsletterSignup = ({ blok, children }) => {
  return (
    <form
      method="post"
      action={blok.subHeadline}
      className="sendfox-form"
      id="10r8en"
      data-async="true"
    >
      <p>
        <input
          type="text"
          className="w-full form-input p-3 sm:text-sm border-solid border-2 border-gray-600 hover:border-gray-800 bg-opacity-100 rounded-md"
          placeholder="First Name"
          name="first_name"
          required
        />
      </p>
      <p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full form-input p-3 sm:text-sm border-solid border-2 border-gray-600 hover:border-gray-800 bg-opacity-100 rounded-md"
          required
        />
      </p>
      <p>
        <label>
          <input type="checkbox" name="gdpr" value="1" required /> I agree to
          receive email updates and promotions
        </label>
      </p>
      <div aria-hidden="true" className="hidden">
        <input
          type="text"
          name="a_password"
          tabIndex="-1"
          // value=""
          autoComplete="off"
        />
      </div>
      {children}
    </form>
  );
};

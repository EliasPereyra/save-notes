type EmailInputProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <>
      <label>Email:</label>
      <div className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input
          name="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="email"
          placeholder="mail@site.com"
          required
        />
      </div>
      <div className="validator-hint hidden">Enter valid email address</div>
    </>
  );
}

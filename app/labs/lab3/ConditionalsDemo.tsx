export function IfElseDemo() {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please sign in.</p>
      )}
      {/* On your own: a third paragraph reading "not false1" */}
      <p>
        {!isLoggedIn ? "not " : ""}
        {String(isLoggedIn)}
        {1}
      </p>
    </div>
  );
}

export function TernaryDemo() {
  const age = 20;
  const hour = 9;
  return (
    <div>
      <p>{age >= 18 ? "Adult" : "Minor"}</p>
      {/* On your own: second ternary on const hour = 9 showing "Good morning" */}
      <p>{hour < 12 ? "Good morning" : "Good afternoon"}</p>
    </div>
  );
}

export function InlineConditionalDemo() {
  const isGuest = true;
  const showBanner = true;
  return (
    <div>
      {showBanner && <p>Welcome to Lab 3!</p>}
      {/* On your own: inline conditional also showing "Guest Inline" */}
      {isGuest && <p>Guest Inline</p>}
    </div>
  );
}

export function NullishDemo() {
  const nullValue = null;
  const username = undefined;
  return (
    <div>
      <p>username ?? &quot;Anonymous&quot; = {username ?? "Anonymous"}</p>
      {/* On your own: nullValue ?? "default" = default */}
      <p>
        nullValue ?? &quot;default&quot; = {nullValue ?? "default"}
      </p>
    </div>
  );
}

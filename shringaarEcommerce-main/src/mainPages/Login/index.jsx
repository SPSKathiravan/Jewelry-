<div className="signUp">
  <p>
    Don't have an account?{" "}
    <NavLink
      to="/signup"
      onClick={() => {
        setSignedIn(false);
      }}
    >
      Sign Up...
    </NavLink>{" "}
  </p>
</div>
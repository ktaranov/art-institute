# Javascript Homework

- Assume most recent language standard are available (ES6)
- Expecting good performance.
- On missing requirements, please make an assumption.
- Solution must be simple and compact.
  No comments, no unrequested features.

> Note: Please make all changes in the repository

## Task 1.1

>Implement function `verify(text)` which verifies whether parentheses within text are
correctly nested. You need to consider three kinds: `()`, `[]`, `<>` and only these kinds.

This issue does not provide prepared infrastructure to run tests. Please consider configuring tests by yourself.

### Test Examples:

```js
verify("---(++++)----") == true
verify("") == true
verify("before ( middle []) after ") == true
verify(") (") == false
verify("<(   >)") == false
verify("(  [  <>  ()  ]  <>  )") == true
verify("   (      [)") == false
```

## Task 1.2

> Simplify and improve the implementation below as much as you can.

> Notes:
> - Improving performance would be a big plus.
> - FYI: This code is over 35 lines and over 300 tokens, but it can be written in
5 lines and in less than 60 tokens.

Please make an assumption on the goal of this function and consider writing tests to compare the result with the original function.

```js
function func(s, a, b)
{
    var match_empty=/^$/ ;
    if (s.match(match_empty))
    {
        return -1;
    }
    else
    {
        var i=s.length-1;
        var aIndex=-1;
        var bIndex=-1;

        while ((aIndex==-1) && (bIndex==-1) && (i>=0))
        {
            if (s.substring(i, i+1) == a)
                aIndex=i;
        	if (s.substring(i, i+1) == b)
                bIndex=i;

        	i--;
        }

        if (aIndex != -1)
        {
            if (bIndex == -1)
                return aIndex;
        	else
                return Math.max(aIndex, bIndex);
        }
        else
        {
            if (bIndex != -1)
                return bIndex;       
	      else
                return -1;
        }
    }
};
```
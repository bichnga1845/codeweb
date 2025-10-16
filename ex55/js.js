function quadratic_equation(a,b,c)
{
    if (a==0)
    {
        return first_degree(b,c)
    }
    else
    {
        delta=Math.pow(b,2)-4*a*c
        if (delta<0)
            return "No solution"
        if (delta==0)
        {
            x=(-b+Math.sqrt(delta))/(2*a)
            return "x1=x2="+x
        }
        x1=(-b+Math.sqrt(delta))/(2*a)
        x2=(-b-Math.sqrt(delta))/(2*a)
        return "x1="+x1+"; x2="+x2
    }
}

function first_degree(a,b)
{
    if(a==0 && b==0)
        return "INF"
    if (a==0 && b!=0)
        return "No solution"
    return -b/a
}

function calc_quadratic(a,b,c,r)
{
    r.value=quadratic_equation(a,b,c)
}
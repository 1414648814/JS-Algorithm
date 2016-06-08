/**
 * 实现key和value对应的HashMap
 *
 */

function HashMap()
{
    //members
    this.keyArray = new Array();
    this.valArray = new Array();

    //methods
    this.put    = put;
    this.get    = get;
    this.size   = size;
    this.clear  = clear;
    this.keySet = keySet;
    this.valSet = valSet;
    this.showAll= showAll;
    this.find   = find;
    this.remove = remove;

}

function put(key,val)
{
    var index = this.find(key);
    if(index == -1)
    {
        this.keyArray.push(key);
        this.valArray.push(val);
    }
    else
    {
        this.valArray[index] = val;
    }
}

function get(key)
{
    var result = null;
    var index = this.find(key);

    if(index != -1)
    {
        result = this.valArray[index];
    }
    return result;
}

function remove(key)
{
    var result = null;
    var index = this.find(key);

    if(index != -1)
    {
        this.keyArray.removeAt(index);
        this.valArray.removeAt(index);
    }
    return ;
}

function size()
{
    return (this.keyArray.length);
}

function clear()
{
    for(var i = 0;i < this.keyArray.length;i++)
    {
        this.keyArray.pop();
        this.valArray.pop();
    }
    return ;
}

function keySet()
{
    return (this.keyArray);
}

function valSet()
{
    return (this.valArray);
}

function find(key)
{
    var result = -1;

    for(var i = 0;i < this.keyArray.length;i++)
    {
        if(this.keyArray[i] == key)
        {
            result = i;
            break ;
        }
    }

    return result;
}

function removeAt(index)
{
    var front = this.slice(0,index);
    var back = this.slice(index+1);

    return front.concat(back);
}
Array.prototype.removeAt = removeAt;

function showAll()
{
    var result = "";

    for(var i = 0;i < this.keyArray.length;i++){
        result += "Key: " + this.keyArray[ i ] + "\tValues: " + this.valArray[ i ] + "\n";
    }

    return result;
}
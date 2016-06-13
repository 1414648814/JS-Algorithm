var MAX = 26;

/**
 * 数据结构
 * next 表示每层种类的数目
 * v 表示一个字典树到此有多少相同前缀的数目
 */

function Trie()
{
    this.next = new Array(MAX);
    this.v = 0;
};

/**
 * 创建字典树
 * @param str
 */
Trie.prototype.createTrie = function(str)
{
    var length = str.length;
    if (str === null || length === 0)
        return;

    var p = this;

    for (var i = 0;i < length;i++)
    {
        var id = str.charAt(i).charCodeAt() - 65;
        if (p.next[id] === null)
        {
            var q = new Trie();
            q.v = 1;
            for (var j = 0;j < MAX;j++)
                q.next[j] = null;
            p.next[id] = q;
            p = p.next[id];
        }
        else
        {
            p.next[id].v ++;
            p = p.next[id];
        }
    }

    //p.v = -1;
    return this;
};

/**
 * 查找字典树
 * @param str
 */
Trie.prototype.findTrie = function(str)
{
    var length = str.length;
    var p = this;

    for (var i = 0;i < length;i++)
    {
        var id = str.charAt(i).charCodeAt() - 65;
        p = p.next[id];

        if (p === null)
            return 0;
    }
    return p.v;
};

/**
 * 删除字典树
 * @param trie
 */
Trie.prototype.deleteTrie = function(trie)
{

};

var str = "ABCD";
var root = new Trie();
for (var i = 0;i < MAX;i++)
    root.next[i] = null;
root = root.createTrie(str);
var p = root;
for (var i = 0;i < str.length;i++)
{
    var id = str.charAt(i).charCodeAt() - 65;
    console.log(p.next[id].v);
    p = p.next[id];
}

var findIndex = root.findTrie("ABE");
console.log(findIndex);
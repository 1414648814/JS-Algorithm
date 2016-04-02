/**
 * Created by staff on 38/1/1.
 */

var PermutationType = {
    Type_FullPermutation : 1,

};

function Permutation(permutationType,relizationType) {
    this.permutationType = permutationType;
    this.relizationType = relizationType;

    var obj = null;
    switch (permutationType) {
        case PermutationType.Type_FullPermutation :
            obj = new FullPermutation(relizationType);
            break;
        default :
            break;
    }

};


var FullPermutationType = {
    Type_Recursion  : 1,
    Type_Dictionary : 2,
    Type_Increment  : 3,
    Type_Decrement  : 4,
    Type_OrthoTrade : 5
};

function FullPermutation(type) {
    switch(type) {
        case FullPermutation.Type_Recursion:
            this.generateByRecursion();
            break;
        case FullPermutation.Type_Dictionary:
            this.generateByDictionary();
            break;
        case FullPermutation.Type_Increment:
            this.generateByIncrement();
            break;
        case FullPermutation.Type_Decrement:
            this.generateByDecrement();
            break;
        case FullPermutation.Type_OrthoTrade:
            this.generateByOrthoTrade();
            break;
        default :
            break;
    }

}

/*
*   以数字数组为例子
*   思路：当前缀是最后一个位置的时候，打印排列结果
*   从index开始进行交换
*   将 0 到 index 的元素作为前缀，index 到 length 个元素进行全排列
*   （index表示前缀的位置，length表示要排列的数目）
* */
FullPermutation.prototype.generateByRecursion = function(nums){
    var _result = [];

    function Swap(a,b){
        var temp = a;
        a = b;
        b = temp;
    };

    function FullPermutation(nums,length,index) {
        if (index >= length) {
            var temp_array = [];
            for (var i = 0; i < nums.length; i++) {
                temp_array.push(nums[i]);
                //应该输出结果
            }
            _result.push(temp_array);
            return;
        }
        for (var i = index; i < length; i++) {
            Swap(i,index);
            FullPermutation(nums,length,index+1);
            Swap(i,index);
        }
    };

    function GetPermutation(){
        FullPermutation(nums,0);
    };

};

FullPermutation.prototype.generateByDictionary = function(){



};


FullPermutation.prototype.generateByIncrement = function(){



};

FullPermutation.prototype.generateByDecrement = function(){



};

FullPermutation.prototype.generateByOrthoTrade = function(){



};
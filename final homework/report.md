# ø�e�����������B�Ψ�Ѯv������Ƨ��ت��{���A�Ϥ��٪��������Ѧ�w3school���ޥ�

## ø�e��
�i�H���C��B�M���B�����ʲ�
������
## �Ϥ���
* �ƹ�������ܲM��
```
img{opacity:0.7;}
    img:hover{opacity: 1.0;}
```
*�@�ƹ�����ɦ���r�X�{
```
.tooltip:hover .tooltiptext{
        visibility: visible;
        opacity: 1;
```
* �]�w�X�{��r�����e
```
.tooltip{
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
    }
    .tooltip .tooltiptext{
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding:5px 0;
        position: absolute;
        z-index: 1;
        bottom:100%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 1s;
    }
    .tooltip:hover .tooltiptext{
        visibility: visible;
        opacity: 1;
    }
```
* �ƪ�
```
* {box-sizing: boder-box;}
    .img-container {
        float:left;
        width: 20%;
        padding: 10px;
        }
    .clearfix::after{
        content:"";
        clear: both;
        display: table;
    }
````
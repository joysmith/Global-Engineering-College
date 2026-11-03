
#### How to Create a simple class

```cpp
#include <iostream>
#include <string>
using namespace std;

// How to create class
class Pen {
    // class member variable
private:
    string color;
    int price;

    // class member function 
public:
    
    void write() {
        cout << "Pen class working";
    }


};

int main() {
    // How to create an instance/object of class
    Pen blackPen;
    blackPen.write();
    return 0;
}
```

<br>
<br>


#### How to create getter and setter function

```cpp
#include <iostream>
#include <string>
using namespace std;

// How to create class
class Pen {
    // class member variable
private:
    string color;
    int price;

    // class member function
public:
    // setters function
    void setColor(string mcolor) {
        color = mcolor;
    }

    void setPrice(int mPrice) {
        price = mPrice;
    }

    // getter function
    string getColor() {
        return color;
    }

    int getPrice() {
        return price;
    }

};

int main() {
    // How to create an instance/object of class
    Pen blackPen;

    blackPen.setColor("Black");
    blackPen.setPrice(120);

    cout << blackPen.getColor() << endl << blackPen.getPrice() << endl;
    return 0;
}
```


<br>
<br>

#### How to create constructor function in a simple class

```cpp
#include <iostream>
#include <string>
using namespace std;

class Pen {
private:
    string color;
    int price;

public:
    
    Pen(string mcolor, int mprice) {
        color = mcolor;
        price = mprice;
    }

    string getColor() {return color;}
    int getPrice() {return price;}

    void setColor(string mcolor) {color = mcolor;}
    void setPrice(int mprice) {price = mprice;}

};

int main() {
    Pen blackPen("black", 120);




    return 0;
}
```

<br>
<br>

#### How to perform constructor overloading -Polymorphism

```cpp
#include <iostream>
#include <string>
using namespace std;

class Pen {
private:
    string color;
    int price;

public:
    // Default constructor, Constructor function  with no input
    Pen() {
        cout << "default constructor" << endl;
    }

    // Constructor function  with single input
    Pen(string mcolor) {
        color = mcolor;
        cout << "single parameter constructor" << endl;
    }

    // Constructor function with 2 inputs 
    Pen(string mcolor, int mprice) {
        color = mcolor;
        price = mprice;
        cout << "two parameter constructor" << endl;
    }

    // getter functions
    string getColor() {return color;}
    int getPrice() {return price;}

    // setter function
    void setColor(string mcolor) {color = mcolor;}
    void setPrice(int mprice) {price = mprice;}

};

int main() {
    Pen redPen;
    Pen blackPen("black", 120);
    Pen bluePen("blue");
    
    return 0;
}
```


<br>
<br>



#### Area of rect and perimeter
```cpp
#include <iostream>
using namespace std;

class Rectangle {
private:
    double length;
    double width;

public:

    // Area = length x width
    double getArea(double mlength, double mwidth) {
        length = mlength;
        width = mwidth;
        return length * width;
    }


    // Perimeter = 2 x (length + width)
    double getPerimeter(double mlength, double mwidth) {
        length = mlength;
        width = mwidth;
        return 2 * (length + width);
    }

};

int main() {
    double l, w, area, perimeter;
    cout << "Enter length of rectangle: ";
    cin >> l;
    cout << "Enter width of rectangle: ";
    cin >> w;

    Rectangle r;
    area = r.getArea(l, w);
    perimeter = r.getPerimeter(l, w);

    cout << "area of rect " << area << endl;
    cout << "perimeter of rect " << perimeter << endl;

    return 0;
}

// Enter length of rectangle: 4
// Enter width of rectangle: 5
// area of rect 20
// perimeter of rect 18
```
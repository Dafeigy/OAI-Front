class person_1():
    def __init__(self) -> None:
        self.target = person_2.target_num(self)
    def target_num(self):
        return 7
    
class person_1():
    def __init__(self) -> None:
        self.target = person_2.target_num(self)
    def target_num(self):
        return 7

class person_2():
    def __init__(self) -> None:
        self.target = 2
    def target_num(self):
        return 5
    
    @classmethod
    def target_num_static(self,target_num:int):
        return 9

a = person_1()
print(a.target)    
print(person_2.target_num_static(target_num=9))
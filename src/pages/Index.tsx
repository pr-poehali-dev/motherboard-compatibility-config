import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const configurations = [
  {
    id: 1,
    motherboard: "ASUS H110M-A/M.2",
    chipset: "H110",
    socket: "LGA 1151",
    processor: "Intel Core i3-6100",
    frequency: "3.7 GHz",
    cores: "2 ядра / 4 потока",
    tdp: "51W",
    price: "Бюджетная",
    status: "Совместимы"
  },
  {
    id: 2,
    motherboard: "MSI H110M PRO-VD",
    chipset: "H110",
    socket: "LGA 1151",
    processor: "Intel Core i5-6400",
    frequency: "2.7 GHz",
    cores: "4 ядра / 4 потока",
    tdp: "65W",
    price: "Средняя",
    status: "Совместимы"
  },
  {
    id: 3,
    motherboard: "Gigabyte GA-H110M-S2H",
    chipset: "H110",
    socket: "LGA 1151",
    processor: "Intel Core i5-6500",
    frequency: "3.2 GHz",
    cores: "4 ядра / 4 потока",
    tdp: "65W",
    price: "Средняя",
    status: "Совместимы"
  },
  {
    id: 4,
    motherboard: "ASRock H110M-HDV",
    chipset: "H110",
    socket: "LGA 1151",
    processor: "Intel Core i7-6700",
    frequency: "3.4 GHz",
    cores: "4 ядра / 8 потоков",
    tdp: "65W",
    price: "Высокая",
    status: "Совместимы"
  },
  {
    id: 5,
    motherboard: "ASUS H110M-K",
    chipset: "H110",
    socket: "LGA 1151",
    processor: "Intel Pentium G4400",
    frequency: "3.3 GHz",
    cores: "2 ядра / 2 потока",
    tdp: "54W",
    price: "Бюджетная",
    status: "Совместимы"
  },
  {
    id: 6,
    motherboard: "MSI H110I PRO",
    chipset: "H110",
    socket: "LGA 1151",
    processor: "Intel Core i3-6300",
    frequency: "3.8 GHz",
    cores: "2 ядра / 4 потока",
    tdp: "51W",
    price: "Средняя",
    status: "Совместимы"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Конфигурации ПК
            </h1>
            <p className="text-lg text-gray-600">
              Подобранные конфигурации материнских плат и процессоров с чипсетом H110
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {configurations.map((config) => (
            <Card key={config.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                    {config.motherboard}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    {config.chipset}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Сокет: {config.socket}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Processor Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Cpu" size={16} className="text-gray-600" />
                    <span className="font-medium text-gray-900">{config.processor}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-500">Частота:</span>
                      <br />
                      <span className="font-medium text-gray-900">{config.frequency}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Ядра:</span>
                      <br />
                      <span className="font-medium text-gray-900">{config.cores}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">TDP:</span>
                      <br />
                      <span className="font-medium text-gray-900">{config.tdp}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Категория:</span>
                      <br />
                      <span className="font-medium text-gray-900">{config.price}</span>
                    </div>
                  </div>
                </div>

                {/* Compatibility Status */}
                <div className="pt-4 border-t border-gray-100">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
                    size="sm"
                  >
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    {config.status}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg border border-gray-200 p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              О чипсете H110
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Чипсет Intel H110 предназначен для бюджетных и офисных систем. 
              Поддерживает процессоры 6-го поколения Intel Core (Skylake) с сокетом LGA 1151. 
              Обеспечивает базовую функциональность без возможности разгона процессора, 
              что делает его идеальным выбором для стабильных рабочих конфигураций.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
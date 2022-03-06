namespace Ships.Domain.Aggregates.ShipAggregate
{
    public class PrimitiveShip : IPrimitiveShip
    {
        public string Id { get; set ; }
        public string Name { get; set; }
        public double Length { get; set; }
        public double Width { get; set; }
        public string Code { get; set; }

        public PrimitiveShip(string id, string name, double length, double width, string code)
        {
            Id = id;
            Name = name;
            Length = length;
            Width = width;
            Code = code;
        }
    }
}